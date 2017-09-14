class RemoveColumnFromFavorites < ActiveRecord::Migration[5.1]
  def change
    remove_column :favorites, :movie_id, :string
  end
end
