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
 * Globalize Culture tzm-Latn-DZ
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

Globalize.addCultureInfo( "tzm-Latn-DZ", "default", {
	name: "tzm-Latn-DZ",
	englishName: "Tamazight (Latin, Algeria)",
	nativeName: "Tamazight (Djazaïr)",
	language: "tzm-Latn",
	numberFormat: {
		pattern: ["n-"],
		",": ".",
		".": ",",
		NaN: "Non Numérique",
		negativeInfinity: "-Infini",
		positiveInfinity: "+Infini",
		percent: {
			",": ".",
			".": ","
		},
		currency: {
			pattern: ["-n $","n $"],
			symbol: "DZD"
		}
	},
	calendars: {
		standard: {
			"/": "-",
			firstDay: 6,
			days: {
				names: ["Acer","Arime","Aram","Ahad","Amhadh","Sem","Sedh"],
				namesAbbr: ["Ace","Ari","Ara","Aha","Amh","Sem","Sed"],
				namesShort: ["Ac","Ar","Ar","Ah","Am","Se","Se"]
			},
			months: {
				names: ["Yenayer","Furar","Maghres","Yebrir","Mayu","Yunyu","Yulyu","Ghuct","Cutenber","Ktuber","Wambir","Dujanbir",""],
				namesAbbr: ["Yen","Fur","Mag","Yeb","May","Yun","Yul","Ghu","Cut","Ktu","Wam","Duj",""]
			},
			AM: null,
			PM: null,
			patterns: {
				d: "dd-MM-yyyy",
				D: "dd MMMM, yyyy",
				t: "H:mm",
				T: "H:mm:ss",
				f: "dd MMMM, yyyy H:mm",
				F: "dd MMMM, yyyy H:mm:ss",
				M: "dd MMMM"
			}
		}
	}
});

}( this ));
