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
 * Globalize Culture iu-Latn
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

Globalize.addCultureInfo( "iu-Latn", "default", {
	name: "iu-Latn",
	englishName: "Inuktitut (Latin)",
	nativeName: "Inuktitut",
	language: "iu-Latn",
	numberFormat: {
		groupSizes: [3,0],
		percent: {
			groupSizes: [3,0]
		}
	},
	calendars: {
		standard: {
			days: {
				names: ["Naattiinguja","Naggajjau","Aippiq","Pingatsiq","Sitammiq","Tallirmiq","Sivataarvik"],
				namesAbbr: ["Nat","Nag","Aip","Pi","Sit","Tal","Siv"],
				namesShort: ["N","N","A","P","S","T","S"]
			},
			months: {
				names: ["Jaannuari","Viivvuari","Maatsi","Iipuri","Mai","Juuni","Julai","Aaggiisi","Sitipiri","Utupiri","Nuvipiri","Tisipiri",""],
				namesAbbr: ["Jan","Viv","Mas","Ipu","Mai","Jun","Jul","Agi","Sii","Uut","Nuv","Tis",""]
			},
			patterns: {
				d: "d/MM/yyyy",
				D: "ddd, MMMM dd,yyyy",
				f: "ddd, MMMM dd,yyyy h:mm tt",
				F: "ddd, MMMM dd,yyyy h:mm:ss tt"
			}
		}
	}
});

}( this ));
