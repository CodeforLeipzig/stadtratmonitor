require 'test_helper'

class RoutesTest < ActionDispatch::IntegrationTest
  test "route test" do
    assert_generates "/import", { :controller => "import", :action => "new_papers_callback" }
    assert_generates "/", :controller => "search", :action => "index"
  end
end