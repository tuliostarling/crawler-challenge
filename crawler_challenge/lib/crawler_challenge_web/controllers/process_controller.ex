defmodule CrawlerChallengeWeb.ProcessController do
  use CrawlerChallengeWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
