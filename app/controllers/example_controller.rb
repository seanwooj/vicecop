class ExampleController < ApplicationController
  def index; end

  def test
    @vices = [
      {:id => 1, :name => 'smoking'},
      {:id => 2, :name => 'eating off diet'}
    ]

    render :json => @vices
  end
end
