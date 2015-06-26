class PagesController < ApplicationController
  def home
    @discussions = Discussion.all
  end
end
