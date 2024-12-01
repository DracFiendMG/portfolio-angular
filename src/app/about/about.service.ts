import { HttpClient, HttpHeaders } from "@angular/common/http";
import { DisplayImage } from "./model/display-image.model";
import { BehaviorSubject, catchError, map, Observable, of } from "rxjs";
import { Injectable } from "@angular/core";
import { environment } from "../environments/prod/environment.prod";
import { Content } from "./model/content.model";
import { Contact } from "./model/contact.model";

@Injectable()
export class AboutService {
    name: string = 'about'
    private apiUrl = environment.apiUrl;
    private contentSubject = new BehaviorSubject<Content[]>([])
    private contactSubject = new BehaviorSubject<Contact[]>([])
    private skillsSubject = new BehaviorSubject<DisplayImage[]>([])

    content$ = this.contentSubject.asObservable()
    contacts$ = this.contactSubject.asObservable()
    skills$ = this.skillsSubject.asObservable()

    constructor(private http: HttpClient) {
        this.fetchContent()
        this.fetchContacts()
        this.fetchSkills()
    }

    getContent(): Observable<Content[]> {
        return this.content$
    }

    getContacts(): Observable<Contact[]> {
        return this.contacts$
    }

    getSkills(): Observable<DisplayImage[]> {
        return this.skills$
    }

    private fetchContent() {
        this.http.get<Content[]>(`${this.apiUrl}/content`).subscribe(
            (data) => {
                this.contentSubject.next(data)
            },
            (error) => {
                console.error('Error fetching content:', error);
            }
        )
    }

    private fetchContacts() {
        this.http.get<Contact[]>(`${this.apiUrl}/contacts`).subscribe(
            (data) => {
                this.contactSubject.next(data)
            },
            (error) => {
                console.error('Error fetching contacts:', error)
            }
        )
    }

    private fetchSkills() {
        this.http.get<DisplayImage[]>(`${this.apiUrl}/skills`).subscribe(
            (data) => {
                this.skillsSubject.next(data)
            },
            (error) => {
                console.error('Error fetching skills:', error);
            }
        )
    }
}