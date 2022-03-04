import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpMethodsService } from 'src/app/shared/services/http-methods.service';
import { api_url } from 'src/app/shared/static/api-urls';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-view-responses',
  templateUrl: './view-responses.component.html',
  styleUrls: ['./view-responses.component.scss'],
})
export class ViewResponsesComponent implements OnInit {

  key: string;
  email: string;
  responseValues: Array<any>;
  loadingContinues: boolean;

  constructor(private route: ActivatedRoute,
    private httpMethod: HttpMethodsService, private navRoute: Router) { }

  ngOnInit(): void {
    const routeEmail = this.route.snapshot.paramMap.get('email')!.toString();
    const routeKey = this.route.snapshot.paramMap.get('id')!.toString();
    this.key = routeKey;
    this.email = routeEmail;
    this.loadingContinues = true;
    this.checkCredentials(routeEmail, routeKey);
  }

  checkCredentials(email: string, key: string): void {
    this.httpMethod.getData(`${api_url.create_survey}/-${key}.json`).subscribe((res) => {
      if (res.email !== email) {
        alert('Ninja is unable to identify you, navigating back to the main page.')
        this.navRoute.navigateByUrl(environment.url);
      } else {
        this.loadResponseValues(key);
      }
    },
      (err) => {
        alert('Ninja is unable to find the key, navigating back to the main page. Meanwhile you can also talk to the key sharer. Toodles!');
        this.navRoute.navigateByUrl(environment.url);
      });
  }

  loadResponseValues(key: string): void {
    this.httpMethod.getData(`${api_url.post_responses}.json`).subscribe(res => {
      let totalResponses = [];
      for (let key in res) {
        totalResponses.push(res[key]);
      }
      let i = 0;
      this.responseValues = totalResponses.filter(item => item.key === key).map(item => {
        i += 1;
        return {
          ...item,
          response: item.response.map((res: any) => {
            return {
              ques: res.ques,
              responses: typeof res.responses === 'string' ? res.responses : res.responses.join(',')
            }
          }),
          position: i
        };
      });
      console.log(this.responseValues);
      this.loadingContinues = false;
    },
      err => {
      });
  }

  mainPageNavHandler(): void {
    this.navRoute.navigateByUrl(environment.url);
  }

}
