require 'test_helper'

class AuthenticationTest < ActionDispatch::IntegrationTest
  test 'register via first time sign in and sign out' do
    visit '/auth/developer'
    fill_in 'Name', with: 'me'
    fill_in 'Email', with: 'user@example.com'
    click_button 'Sign In'
    assert_equal '/leipzig', current_path
    assert_is_signed_in

    click_link 'Abmelden'
    assert_equal '/leipzig', current_path
    assert_is_signed_out
  end

  def assert_is_signed_in
    assert_equal 'Abmelden', find('[data-logout]').text
  end

  def assert_is_signed_out
    assert_equal 'Anmelden', find('[data-persona-login]').text
  end
end
