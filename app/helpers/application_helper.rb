module ApplicationHelper
  def t_model(path)
    t("activerecord.models.#{path}")
  end

  def t_model_attr(path)
    t("activerecord.attributes.#{path}")
  end
end
