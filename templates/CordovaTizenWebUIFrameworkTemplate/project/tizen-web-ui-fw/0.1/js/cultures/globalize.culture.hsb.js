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
 * Globalize Culture hsb
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

Globalize.addCultureInfo( "hsb", "default", {
	name: "hsb",
	englishName: "Upper Sorbian",
	nativeName: "hornjoserbšćina",
	language: "hsb",
	numberFormat: {
		",": ".",
		".": ",",
		NaN: "njedefinowane",
		negativeInfinity: "-njekónčne",
		positiveInfinity: "+njekónčne",
		percent: {
			",": ".",
			".": ","
		},
		currency: {
			pattern: ["-n $","n $"],
			",": ".",
			".": ",",
			symbol: "€"
		}
	},
	calendars: {
		standard: {
			"/": ". ",
			firstDay: 1,
			days: {
				names: ["njedźela","póndźela","wutora","srjeda","štwórtk","pjatk","sobota"],
				namesAbbr: ["nje","pón","wut","srj","štw","pja","sob"],
				namesShort: ["n","p","w","s","š","p","s"]
			},
			months: {
				names: ["januar","februar","měrc","apryl","meja","junij","julij","awgust","september","oktober","nowember","december",""],
				namesAbbr: ["jan","feb","měr","apr","mej","jun","jul","awg","sep","okt","now","dec",""]
			},
			monthsGenitive: {
				names: ["januara","februara","měrca","apryla","meje","junija","julija","awgusta","septembra","oktobra","nowembra","decembra",""],
				namesAbbr: ["jan","feb","měr","apr","mej","jun","jul","awg","sep","okt","now","dec",""]
			},
			AM: null,
			PM: null,
			eras: [{"name":"po Chr.","start":null,"offset":0}],
			patterns: {
				d: "d. M. yyyy",
				D: "dddd, 'dnja' d. MMMM yyyy",
				t: "H.mm 'hodź.'",
				T: "H:mm:ss",
				f: "dddd, 'dnja' d. MMMM yyyy H.mm 'hodź.'",
				F: "dddd, 'dnja' d. MMMM yyyy H:mm:ss",
				M: "d. MMMM",
				Y: "MMMM yyyy"
			}
		}
	}
});

}( this ));
