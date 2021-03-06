defmodule CrawlerChallenge.Repo.Migrations.AddProcessIdFkToDetails do
  use Ecto.Migration

  def change do
    alter table(:details) do
      add :process_id, references(:processes, on_delete: :delete_all)
    end

    create index(:details, [:process_id])
  end
end
