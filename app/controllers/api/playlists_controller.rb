class Api::PlaylistsController < ApplicationController
  before_action :set_user
  before_action :set_playlist, only: [:show, :update, :destroy]

  def index
    render json: current_user.playlists.all
  end

  def create
    playlist = current_user.playlists.new(playlist_params)
    if playlist.save
      render json: playlist
    else
      render json: playlist.errors
    end
  end

  def show
    render json: @playlist
  end

  def update
    if @playlist.save
      render json: @playlist
    else
      render json: @playlist.errors
    end
  end

  def destroy
    @playlist.destroy
  end

  private 

  def set_playlist
    @playlist = playlist.find(params[:id])
  end

  def set_user
    @current_user = Current_user.find(params[:current_user_id])  
  end

  def playlist_params
    params.require(:playlist).permit(:title, :video_id)
  end
end
