class CreateMovies < ActiveRecord::Migration[5.1]
  def change
    create_table :movies do |t|
      t.string :title
      t.string :poster
      t.string :released
      t.string :rated
      t.string :genre
      t.string :plot

      t.timestamps
    end
  end
end
