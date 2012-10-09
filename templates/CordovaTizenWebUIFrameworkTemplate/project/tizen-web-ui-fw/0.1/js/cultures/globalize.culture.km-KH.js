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
 * Globalize Culture km-KH
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

Globalize.addCultureInfo( "km-KH", "default", {
	name: "km-KH",
	englishName: "Khmer (Cambodia)",
	nativeName: "ខ្មែរ (កម្ពុជា)",
	language: "km",
	numberFormat: {
		pattern: ["- n"],
		groupSizes: [3,0],
		NaN: "NAN",
		negativeInfinity: "-- អនន្ត",
		positiveInfinity: "អនន្ត",
		percent: {
			pattern: ["-n%","n%"],
			groupSizes: [3,0]
		},
		currency: {
			pattern: ["-n$","n$"],
			symbol: "៛"
		}
	},
	calendars: {
		standard: {
			"/": "-",
			days: {
				names: ["ថ្ងៃអាទិត្យ","ថ្ងៃច័ន្ទ","ថ្ងៃអង្គារ","ថ្ងៃពុធ","ថ្ងៃព្រហស្បតិ៍","ថ្ងៃសុក្រ","ថ្ងៃសៅរ៍"],
				namesAbbr: ["អាទិ.","ច.","អ.","ពុ","ព្រហ.","សុ.","ស."],
				namesShort: ["អា","ច","អ","ពុ","ព្","សុ","ស"]
			},
			months: {
				names: ["មករា","កុម្ភៈ","មិនា","មេសា","ឧសភា","មិថុនា","កក្កដា","សីហា","កញ្ញា","តុលា","វិច្ឆិកា","ធ្នូ",""],
				namesAbbr: ["១","២","៣","៤","៥","៦","៧","៨","៩","១០","១១","១២",""]
			},
			AM: ["ព្រឹក","ព្រឹក","ព្រឹក"],
			PM: ["ល្ងាច","ល្ងាច","ល្ងាច"],
			eras: [{"name":"មុនគ.ស.","start":null,"offset":0}],
			patterns: {
				d: "yyyy-MM-dd",
				D: "d MMMM yyyy",
				t: "H:mm tt",
				T: "HH:mm:ss",
				f: "d MMMM yyyy H:mm tt",
				F: "d MMMM yyyy HH:mm:ss",
				M: "'ថ្ងៃទី' dd 'ខែ' MM",
				Y: "'ខែ' MM 'ឆ្នាំ' yyyy"
			}
		},
		Gregorian_TransliteratedEnglish: {
			name: "Gregorian_TransliteratedEnglish",
			days: {
				names: ["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],
				namesAbbr: ["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],
				namesShort: ["أ","ا","ث","أ","خ","ج","س"]
			},
			months: {
				names: ["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر",""],
				namesAbbr: ["يناير","فبراير","مارس","ابريل","مايو","يونيو","يوليو","اغسطس","سبتمبر","اكتوبر","نوفمبر","ديسمبر",""]
			},
			AM: ["ព្រឹក","ព្រឹក","ព្រឹក"],
			PM: ["ល្ងាច","ល្ងាច","ល្ងាច"],
			eras: [{"name":"م","start":null,"offset":0}],
			patterns: {
				d: "MM/dd/yyyy",
				t: "H:mm tt",
				T: "HH:mm:ss",
				f: "dddd, MMMM dd, yyyy H:mm tt",
				F: "dddd, MMMM dd, yyyy HH:mm:ss"
			}
		}
	}
});

}( this ));
