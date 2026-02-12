import { Component } from '@angular/core';
import { CountryList } from "../../components/country-list/country-list";
import { SearchInput } from "../../components/search-input/search-input";

@Component({
  selector: 'app-by-contry-page',
  imports: [CountryList, SearchInput],
  templateUrl: './by-contry-page.html',
})
export class ByContryPage { }
