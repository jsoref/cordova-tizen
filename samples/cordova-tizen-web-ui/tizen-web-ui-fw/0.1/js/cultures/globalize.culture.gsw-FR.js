/*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
*/

/*
 * Globalize Culture gsw-FR
 *
 * http://github.com/jquery/globalize
 *
 * Copyright Software Freedom Conservancy, Inc.
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * This file was generated by the Globalize Culture Generator
 * Translation: bugs found in this file need to be fixed in the generator
 */

(function( window, undefined ) {

var Globalize;

if ( typeof require !== "undefined"
	&& typeof exports !== "undefined"
	&& typeof module !== "undefined" ) {
	// Assume CommonJS
	Globalize = require( "globalize" );
} else {
	// Global variable
	Globalize = window.Globalize;
}

Globalize.addCultureInfo( "gsw-FR", "default", {
	name: "gsw-FR",
	englishName: "Alsatian (France)",
	nativeName: "Elsässisch (Frànkrisch)",
	language: "gsw",
	numberFormat: {
		",": " ",
		".": ",",
		NaN: "Ohne Nummer",
		negativeInfinity: "-Unendlich",
		positiveInfinity: "+Unendlich",
		percent: {
			",": " ",
			".": ","
		},
		currency: {
			pattern: ["-n $","n $"],
			",": " ",
			".": ",",
			symbol: "€"
		}
	},
	calendars: {
		standard: {
			firstDay: 1,
			days: {
				names: ["Sundàà","Mondàà","Dienschdàà","Mittwuch","Dunnerschdàà","Fridàà","Sàmschdàà"],
				namesAbbr: ["Su.","Mo.","Di.","Mi.","Du.","Fr.","Sà."],
				namesShort: ["Su","Mo","Di","Mi","Du","Fr","Sà"]
			},
			months: {
				names: ["Jänner","Feverje","März","Àpril","Mai","Jüni","Jüli","Augscht","September","Oktower","Nowember","Dezember",""],
				namesAbbr: ["Jän.","Fev.","März","Apr.","Mai","Jüni","Jüli","Aug.","Sept.","Okt.","Now.","Dez.",""]
			},
			AM: null,
			PM: null,
			eras: [{"name":"Vor J.-C.","start":null,"offset":0}],
			patterns: {
				d: "dd/MM/yyyy",
				D: "dddd d MMMM yyyy",
				t: "HH:mm",
				T: "HH:mm:ss",
				f: "dddd d MMMM yyyy HH:mm",
				F: "dddd d MMMM yyyy HH:mm:ss",
				M: "d MMMM",
				Y: "MMMM yyyy"
			}
		}
	}
});

}( this ));
