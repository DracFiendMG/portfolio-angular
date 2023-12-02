import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() tabSelected = new EventEmitter<string>()
  activeTab = 'home'

  onSelect(tab: string) {
    this.activeTab = tab
    this.tabSelected.emit(tab)
  }
}
