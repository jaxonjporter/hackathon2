class Api::VideoController < ApplicationController
  before_action :set_videos, only: [:show, :update, :destroy]

  def index
    render json: current_user.videos
  end

  def create
    video = current_user.videos.new(video_params)
    if video.save
      render json: video
    else
      render json: video.errors
    end
  end

  def show
    render json: @video
  end

  def update
    if @video.save
      render json: @video
    else
      render json: @video.errors
    end
  end

  def destroy
    @video.destroy
  end

  private 

  def set_video
    @video = Video.find(params[:id])
  end

  def video_params
    params.require(:video).permit(:title, :video_url, :liked, :disliked)
  end
end
