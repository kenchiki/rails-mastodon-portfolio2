class User < ApplicationRecord
  has_many :websites, dependent: :destroy
  has_many :work_categories, dependent: :destroy
  has_many :works, dependent: :destroy

  accepts_nested_attributes_for :websites
  devise :database_authenticatable, :recoverable, :rememberable, :validatable, :omniauthable, omniauth_providers: %i[mastodon]

  def self.find_or_create_user!(auth)
    uid = auth.info.name + auth.uid

    find_or_create_by!(provider: auth.provider, uid: uid) do |user|
      user.email = uid
      user.password = Devise.friendly_token[0, 20]
      user.name = auth.info.name
    end
  end
end
