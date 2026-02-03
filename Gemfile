source "https://rubygems.org"

# Hello! This is where you manage your Jekyll site's dependencies.

# This will automatically install the version of Jekyll and other gems 
# that are supported by GitHub Pages.
gem "github-pages", group: :jekyll_plugins

# If you have any plugins that aren't supported by GitHub Pages,
# you can add them here, but remember they won't work on GitHub Pages
# unless you build locally and deploy the _site folder.

# Performance improvements
group :jekyll_plugins do
  gem "jekyll-feed"
  gem "jekyll-seo-tag"
end

# Windows specific support
gem "wdm", "~> 0.1.0" if Gem.win_platform?

# Fixes for Faraday v2.0+ and Ruby 3.0+
gem "faraday-retry"
gem "webrick"
