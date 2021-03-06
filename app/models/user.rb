class User < ApplicationRecord

    validates :username, :email, :password_digest, :session_token, presence: true
    validates :username, :email, uniqueness: true
    validates :password, length: { minimum: 6 }, allow_nil: true


    has_one_attached :profile_picture

    has_many :posts,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :Post

    has_many :comments,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :Comment

    has_many :likes,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :Like

    has_many :comment_likes,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :CommentLike

    has_many :follows,
    primary_key: :id,
    foreign_key: :follower_id,
    class_name: :Follow

    has_many :authors,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :Follow

  
    attr_reader :password

    after_initialize :ensure_session_token
  
    def self.find_by_credentials(username, password)
      user = User.find_by(username: username)
      user && user.is_password?(password) ? user : nil
    end
    
    def is_password?(password)
      BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end
  
    def reset_session_token!  
      self.session_token = SecureRandom.urlsafe_base64
      self.save!
      self.session_token
    end
    
    def ensure_session_token
      self.session_token ||= SecureRandom.urlsafe_base64
    end
    
end
