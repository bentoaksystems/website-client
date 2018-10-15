import { Component, Input, OnInit } from '@angular/core';
import { ResponsiveService } from '../../../../shared/services/responsive.service';
import * as marked from 'marked';

@Component({
    selector: 'app-technical-support',
    templateUrl: './technical-support.component.html',
    styleUrls: ['./technical-support.component.css']
})

export class TechnicalSupportComponent implements OnInit {
    @Input()
     techsuppInfo: any;
    desc = null;
    isMobile = false;

    constructor(private responsiveService: ResponsiveService) { }

    ngOnInit() {
        this.isMobile = this.responsiveService.isMobile;
        this.responsiveService.switch$.subscribe(isMobile => this.isMobile = isMobile);
        this.desc = marked(this.techsuppInfo.description);
    }

}