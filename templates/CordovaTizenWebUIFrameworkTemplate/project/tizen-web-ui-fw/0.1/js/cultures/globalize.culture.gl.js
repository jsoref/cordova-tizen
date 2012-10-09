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
 * Globalize Culture gl
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

Globalize.addCultureInfo( "gl", "default", {
	name: "gl",
	englishName: "Galician",
	nativeName: "galego",
	language: "gl",
	numberFormat: {
		",": ".",
		".": ",",
		NaN: "NeuN",
		negativeInfinity: "-Infinito",
		positiveInfinity: "Infinito",
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
			firstDay: 1,
			days: {
				names: ["domingo","luns","martes","mércores","xoves","venres","sábado"],
				namesAbbr: ["dom","luns","mar","mér","xov","ven","sáb"],
				namesShort: ["do","lu","ma","mé","xo","ve","sá"]
			},
			months: {
				names: ["xaneiro","febreiro","marzo","abril","maio","xuño","xullo","agosto","setembro","outubro","novembro","decembro",""],
				namesAbbr: ["xan","feb","mar","abr","maio","xuñ","xull","ago","set","out","nov","dec",""]
			},
			AM: ["a.m.","a.m.","A.M."],
			PM: ["p.m.","p.m.","P.M."],
			eras: [{"name":"d.C.","start":null,"offset":0}],
			patterns: {
				d: "dd/MM/yyyy",
				D: "dddd, dd' de 'MMMM' de 'yyyy",
				t: "H:mm",
				T: "H:mm:ss",
				f: "dddd, dd' de 'MMMM' de 'yyyy H:mm",
				F: "dddd, dd' de 'MMMM' de 'yyyy H:mm:ss",
				M: "dd MMMM",
				Y: "MMMM' de 'yyyy"
			}
		}
	}
});

}( this ));
