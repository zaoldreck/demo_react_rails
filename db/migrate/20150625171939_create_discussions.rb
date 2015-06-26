class CreateDiscussions < ActiveRecord::Migration
  def change
    create_table :discussions do |t|
      t.string :title
      t.string :message

      t.timestamps null: false
    end
  end
end
