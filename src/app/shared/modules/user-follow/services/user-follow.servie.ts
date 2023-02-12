import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { GetUserProfileResponseInterface } from "src/app/shared/types/get-user-profile-response.interface";
import { ProfileInterface } from "src/app/shared/types/profile.interface";
import { environment } from "src/environments/environment";

@Injectable()
export class UserFollowingService {


  constructor(private http: HttpClient) {

  }

  getApiUrl(username: string): string {
    return `${environment.apiUrl}/profiles/${username}/follow`;
  }

  following(username: string): Observable<ProfileInterface> {
    const apiUrl = this.getApiUrl(username);
    return this.http.post<GetUserProfileResponseInterface>(apiUrl, {}).pipe(map((response: GetUserProfileResponseInterface) => {
      return response.profile
    }))
  }

  unFollowing(username: string): Observable<ProfileInterface> {
    const apiUrl = this.getApiUrl(username);
    return this.http.delete<GetUserProfileResponseInterface>(apiUrl, {}).pipe(map((response: GetUserProfileResponseInterface) => {
      return response.profile
    }))
  }
}
