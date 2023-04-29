# frozen_string_literal: true

class ImportController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:new_papers_callback]

  def new_papers_callback
    received_secret = params[:secret]
    expected_secret = Rails.application.config.shared_import_secret
    if received_secret != expected_secret
      print("secrets not match")
      return
    end

    require 'open-uri'
    #api_key = Rails.application.config_for(:morph)['key']
    #uri = URI.parse("https://api.morph.io/jrlover/city_council_leipzig_recent_papers/data.json?key=#{api_key}&query=select%20*%20from%20%27data%27")
    print("before parse")
    uri = URI.parse("https://joergreichert.de/srm/input.json")
    print("after parse")
    Paper.import_from_json(uri.read)
    print("after import")
    head :no_content
  end
end
