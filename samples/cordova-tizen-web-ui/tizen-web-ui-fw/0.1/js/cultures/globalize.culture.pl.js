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
 * Globalize Culture pl
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

Globalize.addCultureInfo( "pl", "default", {
	name: "pl",
	englishName: "Polish",
	nativeName: "polski",
	language: "pl",
	numberFormat: {
		",": " ",
		".": ",",
		NaN: "nie jest liczbą",
		negativeInfinity: "-nieskończoność",
		positiveInfinity: "+nieskończoność",
		percent: {
			pattern: ["-n%","n%"],
			",": " ",
			".": ","
		},
		currency: {
			pattern: ["-n $","n $"],
			",": " ",
			".": ",",
			symbol: "zł"
		}
	},
	calendars: {
		standard: {
			"/": "-",
			firstDay: 1,
			days: {
				names: ["niedziela","poniedziałek","wtorek","środa","czwartek","piątek","sobota"],
				namesAbbr: ["N","Pn","Wt","Śr","Cz","Pt","So"],
				namesShort: ["N","Pn","Wt","Śr","Cz","Pt","So"]
			},
			months: {
				names: ["styczeń","luty","marzec","kwiecień","maj","czerwiec","lipiec","sierpień","wrzesień","październik","listopad","grudzień",""],
				namesAbbr: ["sty","lut","mar","kwi","maj","cze","lip","sie","wrz","paź","lis","gru",""]
			},
			monthsGenitive: {
				names: ["stycznia","lutego","marca","kwietnia","maja","czerwca","lipca","sierpnia","września","października","listopada","grudnia",""],
				namesAbbr: ["sty","lut","mar","kwi","maj","cze","lip","sie","wrz","paź","lis","gru",""]
			},
			AM: null,
			PM: null,
			patterns: {
				d: "yyyy-MM-dd",
				D: "d MMMM yyyy",
				t: "HH:mm",
				T: "HH:mm:ss",
				f: "d MMMM yyyy HH:mm",
				F: "d MMMM yyyy HH:mm:ss",
				M: "d MMMM",
				Y: "MMMM yyyy"
			}
		}
	}
});

}( this ));
