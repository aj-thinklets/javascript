import { Component } from '@angular/core';

@Component({
    'selector': 'app-server', //commonly used
    //'selector': '[app-server]' --> this is attribute selector <div app-server></div>
    //'selector': '.app-server' --> this is class selector <dic class="app-server"></div>

    //'template': `<p>This is the inline template url (using backticks)</p>`
    'templateUrl': './server.component.html',
    // 'styleUrls': ['./server.component.css']  //External css
    styles: [`  
    p {
        font-size: 20px;
    }
    
    `]
})

export class ServerComponent {

    /* ======= Example-1 Event Binding ========= */
    serverId: number = 10;
    serverName: string = 'Test Server'
    serverStatus: string = 'Offline'
    allownewServer = true;
    username = '';
    serverCreated = '';

    /* ======= Example-2 Event Binding ========= */
    getserverStatus() {
        return this.serverStatus = 'Online'; // return in important to mention
    }

    /* ======= Example-3 Property Binding ========= */
    constructor() {
        setTimeout(() => {
            this.allownewServer = true;
        }, 2000);
    }

     /* ======= Example-4 Passing and using data with event binding ========= */
     onUpdateServerName(event: Event){
        this.serverName = (<HTMLInputElement>event.target).value;
         console.log(this.serverName)
     }

     /* ======= Example-5 Data Binding ========= */
     reset() {
        return this.username = '';
     }

}