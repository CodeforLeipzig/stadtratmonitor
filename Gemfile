source 'https://rubygems.org'

ruby "3.2.1"

gem 'rails', '~> 7.0.4'
gem 'rails-i18n'

# database and search index
gem 'elasticsearch', '~> 8'
gem 'elasticsearch-dsl'
gem 'elasticsearch-model', '~> 7'
gem 'elasticsearch-rails', '~> 7'
gem 'sqlite3'

# pagination
gem 'kaminari'
gem 'kaminari-i18n'

# authentication
gem 'omniauth'
gem 'omniauth-browserid'

# templates, css and other frontend related
gem 'foundation-rails', '~> 6.5'
gem 'jquery-rails'
gem 'sass-rails'
gem 'sassc', '~> 2.1.0'
gem 'slim-rails'
gem 'turbolinks'
gem 'uglifier'

# misc
gem 'leaflet-rails'
gem 'validate_url'

gem 'webrick', '~> 1.7'

group :development do
  gem 'awesome_print'
  gem 'spring'
  gem 'spring-commands-rspec'
end

group :development, :test do
  gem 'capybara'
  gem 'launchy'
  gem 'pry'
  gem 'pry-rails'
  gem 'puma'
  gem 'rspec-rails', '~> 3.0'
  gem 'rubocop'
end

group :test do
  gem 'apparition'
  gem 'database_cleaner'
  gem 'factory_bot_rails'
  gem 'faker'
  gem 'rails-controller-testing'
  gem 'rubocop-faker'
  gem 'shoulda-matchers', '~> 3.1'
  gem 'simplecov', require: false
end
