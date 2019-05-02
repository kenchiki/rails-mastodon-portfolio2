class Work < ApplicationRecord
  has_many :work_images, dependent: :destroy
  belongs_to :user
  belongs_to :work_category, optional: true

  IMAGE_LIMIT = 4
  accepts_nested_attributes_for :work_images, reject_if: :all_blank, allow_destroy: true, limit: IMAGE_LIMIT

  validates :title, presence: true
  validate -> (work) {
    return unless work.work_category

    unless work.user == work.work_category.user
      errors.add(:work_category_id, 'が存在しません')
    end
  }
end
