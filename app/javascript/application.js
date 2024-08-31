// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import Alpine from "alpinejs";
import "@hotwired/turbo-rails"
import "controllers"

window.Alpine = Alpine;
Alpine.start();