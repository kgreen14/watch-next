class AddReferenceToMovies < ActiveRecord::Migration[5.1]
  def change
    add_reference :movies, :favorite, foreign_key: true
  end
end
