source 'https://rubygems.org'

gem 'rails', '~> 5.1.5'
gem 'rails-i18n'

# database and search index
gem 'sqlite3'
gem 'elasticsearch', '~> 6'
gem 'elasticsearch-model', '~> 6'
gem 'elasticsearch-rails', '~> 6'
gem 'elasticsearch-dsl'

# pagination
gem 'kaminari'
gem 'kaminari-i18n'

# authentication
gem 'omniauth'
gem 'omniauth-browserid'

# templates, css and other frontend related
gem 'sass-rails'
gem 'uglifier'
gem 'slim-rails'
gem 'jquery-rails'
gem 'turbolinks'
gem 'foundation-rails', '~> 5.5'

# misc
gem 'leaflet-rails'
gem 'validate_url'
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw]
gem 'sdoc', '~> 0.4.0', group: :doc

group :development do
  gem 'spring'
  gem 'spring-commands-rspec'
  gem 'awesome_print'
end

group :development, :test do
  gem 'rspec-rails', '~> 3.0'
  gem 'pry'
  gem 'pry-rails'
  gem 'capybara'
  gem 'puma'
  gem 'launchy'
  gem 'rubocop'
end

group :test do
  gem 'factory_bot_rails'
  gem 'shoulda-matchers', '~> 3.1'
  gem 'faker'
  gem 'rubocop-faker'
  gem 'simplecov', require: false
  gem 'database_cleaner'
  gem 'coveralls', require: false
  gem 'apparition'
  gem 'rails-controller-testing'
end
