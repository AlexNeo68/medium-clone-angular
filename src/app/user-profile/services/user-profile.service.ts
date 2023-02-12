import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { GetUserProfileResponseInterface } from "src/app/shared/types/get-user-profile-response.interface";
import { ProfileInterface } from "src/app/shared/types/profile.interface";
import { environment } from "src/environments/environment";

@Injectable()

export class UserProfileService {

  constructor(private http: HttpClient) { }

  getUserProfile(username: string): Observable<ProfileInterface> {
    const url = `${environment.apiUrl}/profiles/${username}`;
    return this.http.get(url).pipe(map((response: GetUserProfileResponseInterface) => response.profile))
  }
}
