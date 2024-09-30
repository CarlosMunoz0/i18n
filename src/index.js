import React from "react";
import ReactDOM from "react-dom";
import {IntlProvider} from 'react-intl';
import JobsList from "./components/Jobslist";
import 'bootstrap/dist/css/bootstrap.min.css';
import localeEsMessages from './locales/es.json';
import localeEnMessages from './locales/en.json';

const getNavigatorLanguage = () => {
	return navigator.language.split('-')[0];
}

ReactDOM.render(
        <IntlProvider locale={getNavigatorLanguage()} messages={getNavigatorLanguage() === 'es' ? localeEsMessages : localeEnMessages}>
                <JobsList navigationLanguage = {getNavigatorLanguage()}/>
        </IntlProvider>, document.getElementById("root")
);