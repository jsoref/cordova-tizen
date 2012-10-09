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
 * Globalize Culture uz-Latn
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

Globalize.addCultureInfo( "uz-Latn", "default", {
	name: "uz-Latn",
	englishName: "Uzbek (Latin)",
	nativeName: "U'zbek",
	language: "uz-Latn",
	numberFormat: {
		",": " ",
		".": ",",
		percent: {
			pattern: ["-n%","n%"],
			",": " ",
			".": ","
		},
		currency: {
			pattern: ["-n $","n $"],
			decimals: 0,
			",": " ",
			".": ",",
			symbol: "so'm"
		}
	},
	calendars: {
		standard: {
			firstDay: 1,
			days: {
				names: ["yakshanba","dushanba","seshanba","chorshanba","payshanba","juma","shanba"],
				namesAbbr: ["yak.","dsh.","sesh.","chr.","psh.","jm.","sh."],
				namesShort: ["ya","d","s","ch","p","j","sh"]
			},
			months: {
				names: ["yanvar","fevral","mart","aprel","may","iyun","iyul","avgust","sentyabr","oktyabr","noyabr","dekabr",""],
				namesAbbr: ["yanvar","fevral","mart","aprel","may","iyun","iyul","avgust","sentyabr","oktyabr","noyabr","dekabr",""]
			},
			AM: null,
			PM: null,
			patterns: {
				d: "dd/MM yyyy",
				D: "yyyy 'yil' d-MMMM",
				t: "HH:mm",
				T: "HH:mm:ss",
				f: "yyyy 'yil' d-MMMM HH:mm",
				F: "yyyy 'yil' d-MMMM HH:mm:ss",
				M: "d-MMMM",
				Y: "MMMM yyyy"
			}
		}
	}
});

}( this ));
