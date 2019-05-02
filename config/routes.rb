Rails.application.routes.draw do
  root 'works#index'

  devise_for :users, controllers: { omniauth_callbacks: 'users/omniauth_callbacks' }

  namespace :my do
    resources :websites do
      member do
        put :move_up, :move_down, :move_top, :move_bottom
      end
    end

    resources :work_categories do
      member do
        put :move_up, :move_down, :move_top, :move_bottom
      end
    end

    resources :works do
      member do
        put :move_up, :move_down, :move_top, :move_bottom
      end
    end
  end

  resources :works, only: %i[index show]
end
