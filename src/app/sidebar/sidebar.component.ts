import { Component } from '@angular/core';

@Component({
    selector: 'app-sidebar',
    styleUrls: ['sidebar.component.scss'],
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent {
    // constructor(private shellService: ShellService) {
    // }

    navigate(url: string) {
        // this.shellService.navigate(url);
    }
}
