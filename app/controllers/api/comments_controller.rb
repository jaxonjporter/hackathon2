class Api::CommentsController < ApplicationController
  before_action :set_user
  before_action :set_comment, only: [:update, :destroy, :show]

  def index
    render json: current_user.comments
  end

  def show
    render json: @comment
  end

  def create
    comment = current_user.comments.new(comment_params)
      if comment.save
        render json: comment
      else
        render json: comment.errors
      end
  end

  def update
    if @comment.update(comment_params)
      render json: @comment
    else
      render json @comment.errors
    end
  end

  def destroy
    @comment.destroy
  end

private

def set_user
  @user = User.find(params[:user_id])
end

def set_comment
  @comment = Comment.find(params[:id])

def comment_params
  params.require(:comment).permit(:title, :body)
  end
end
