source 'https://rubygems.org'


# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 5.1.5'
gem 'rails-i18n'
# Use sqlite3 as the database for Active Record
gem 'sqlite3'
gem 'kaminari'
gem 'kaminari-i18n'
# Use SCSS for stylesheets
gem 'sass-rails'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier'
# Use CoffeeScript for .js.coffee assets and views
gem 'coffee-rails'
# See https://github.com/sstephenson/execjs#readme for more supported runtimes
# gem 'therubyracer',  platforms: :ruby
gem 'slim-rails'
# Use jquery as the JavaScript library
gem 'jquery-rails'
# Turbolinks makes following links in your web application faster. Read more: https://github.com/rails/turbolinks
gem 'turbolinks'
# Assets
gem 'foundation-rails', '~> 5.5'

gem 'validate_url'

# Authentication
gem 'omniauth'
gem 'omniauth-browserid'

gem 'elasticsearch', '~> 6'
gem 'elasticsearch-model'
gem 'elasticsearch-rails'
gem 'elasticsearch-dsl'

gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw]

# bundle exec rake doc:rails generates the API under doc/api.
gem 'sdoc', '~> 0.4.0',          group: :doc

group :development do
  gem 'spring'
  gem 'spring-commands-rspec'
  # https://rossta.net/blog/quiet-assets-in-rails-5.html
  # gem 'quiet_assets'
  gem 'awesome_print'
  # gem 'guard-rspec', require: false
  # gem 'terminal-notifier-guard' # FIXME cross-platform
end

group :development, :test do
  gem 'rspec-rails', '~> 3.0'
  gem 'pry'
  gem 'pry-rails'
  gem 'capybara'
  gem 'puma'
  gem 'launchy'
end

group :test do
  gem "factory_bot_rails"
  gem 'shoulda-matchers', '~> 3.1'
  gem 'faker'
  gem 'simplecov', require: false
  gem 'database_cleaner'
  gem 'coveralls', require: false
  gem 'capybara-webkit'
  gem 'rails-controller-testing'
end

# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# Use unicorn as the app server
# gem 'unicorn'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

# Use debugger
# gem 'debugger', group: [:development, :test]
