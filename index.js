const data = [
  {
    code: 'AF', map: '🇦🇫', phoneCode: 93, value: 'Afghanistan',
  },
  {
    code: 'AL', map: '🇦🇱', phoneCode: 355, value: 'Albania',
  },
  {
    code: 'DZ', map: '🇩🇿', phoneCode: 213, value: 'Algeria',
  },
  {
    code: 'AS', map: '🇦🇸', phoneCode: 1684, value: 'American Samoa',
  },
  {
    code: 'AD', map: '🇦🇩', phoneCode: 376, value: 'Andorra',
  },
  {
    code: 'AO', map: '🇦🇴', phoneCode: 244, value: 'Angola',
  },
  {
    code: 'AI', map: '🇦🇮', phoneCode: 1264, value: 'Anguilla',
  },
  {
    code: 'AQ', map: '🇦🇶', phoneCode: 0, value: 'Antarctica',
  },
  {
    code: 'AR', map: '🇦🇷', phoneCode: 54, value: 'Argentina',
  },
  {
    code: 'AM', map: '🇦🇲', phoneCode: 374, value: 'Armenia',
  },
  {
    code: 'AW', map: '🇦🇼', phoneCode: 297, value: 'Aruba',
  },
  {
    code: 'AU', map: '🇦🇺', phoneCode: 61, value: 'Australia',
  },
  {
    code: 'AT', map: '🇦🇹', phoneCode: 43, value: 'Austria',
  },
  {
    code: 'AZ', map: '🇦🇿', phoneCode: 994, value: 'Azerbaijan',
  },
  {
    code: 'BH', map: '🇧🇭', phoneCode: 973, value: 'Bahrain',
  },
  {
    code: 'BD', map: '🇧🇩', phoneCode: 880, value: 'Bangladesh',
  },
  {
    code: 'BB', map: '🇧🇧', phoneCode: 1246, value: 'Barbados',
  },
  {
    code: 'BY', map: '🇧🇾', phoneCode: 375, value: 'Belarus',
  },
  {
    code: 'BE', map: '🇧🇪', phoneCode: 32, value: 'Belgium',
  },
  {
    code: 'BZ', map: '🇧🇿', phoneCode: 501, value: 'Belize',
  },
  {
    code: 'BJ', map: '🇧🇯', phoneCode: 229, value: 'Benin',
  },
  {
    code: 'BM', map: '🇧🇲', phoneCode: 1441, value: 'Bermuda',
  },
  {
    code: 'BT', map: '🇧🇹', phoneCode: 975, value: 'Bhutan',
  },
  {
    code: 'BO', map: '🇧🇴', phoneCode: 591, value: 'Bolivia',
  },
  {
    code: 'BW', map: '🇧🇼', phoneCode: 267, value: 'Botswana',
  },
  {
    code: 'BV', map: '🇧🇻', phoneCode: 0, value: 'Bouvet Island',
  },
  {
    code: 'BR', map: '🇧🇷', phoneCode: 55, value: 'Brazil',
  },
  {
    code: 'IO', map: '🇮🇴', phoneCode: 246, value: 'British Indian Ocean Territory',
  },
  {
    code: 'BN', map: '🇧🇳', phoneCode: 673, value: 'Brunei',
  },
  {
    code: 'BG', map: '🇧🇬', phoneCode: 359, value: 'Bulgaria',
  },
  {
    code: 'BF', map: '🇧🇫', phoneCode: 226, value: 'Burkina Faso',
  },
  {
    code: 'BI', map: '🇧🇮', phoneCode: 257, value: 'Burundi',
  },
  {
    code: 'KH', map: '🇰🇭', phoneCode: 855, value: 'Cambodia',
  },
  {
    code: 'CM', map: '🇨🇲', phoneCode: 237, value: 'Cameroon',
  },
  {
    code: 'CA', map: '🇨🇦', phoneCode: 1, value: 'Canada',
  },
  {
    code: 'CV', map: '🇨🇻', phoneCode: 238, value: 'Cape Verde',
  },
  {
    code: 'KY', map: '🇰🇾', phoneCode: 1345, value: 'Cayman Islands',
  },
  {
    code: 'CF', map: '🇨🇫', phoneCode: 236, value: 'Central African Republic',
  },
  {
    code: 'TD', map: '🇹🇩', phoneCode: 235, value: 'Chad',
  },
  {
    code: 'CL', map: '🇨🇱', phoneCode: 56, value: 'Chile',
  },
  {
    code: 'CN', map: '🇨🇳', phoneCode: 86, value: 'China',
  },
  {
    code: 'CX', map: '🇨🇽', phoneCode: 61, value: 'Christmas Island',
  },
  {
    code: 'CC', map: '🇨🇨', phoneCode: 672, value: 'Cocos (Keeling) Islands',
  },
  {
    code: 'CO', map: '🇨🇴', phoneCode: 57, value: 'Colombia',
  },
  {
    code: 'KM', map: '🇰🇲', phoneCode: 269, value: 'Comoros',
  },
  {
    code: 'CK', map: '🇨🇰', phoneCode: 682, value: 'Cook Islands',
  },
  {
    code: 'CR', map: '🇨🇷', phoneCode: 506, value: 'Costa Rica',
  },
  {
    code: 'CU', map: '🇨🇺', phoneCode: 53, value: 'Cuba',
  },
  {
    code: 'CY', map: '🇨🇾', phoneCode: 357, value: 'Cyprus',
  },
  {
    code: 'DK', map: '🇩🇰', phoneCode: 45, value: 'Denmark',
  },
  {
    code: 'DJ', map: '🇩🇯', phoneCode: 253, value: 'Djibouti',
  },
  {
    code: 'DM', map: '🇩🇲', phoneCode: 1767, value: 'Dominica',
  },
  {
    code: 'DO', map: '🇩🇴', phoneCode: 1809, value: 'Dominican Republic',
  },
  {
    code: 'EC', map: '🇪🇨', phoneCode: 593, value: 'Ecuador',
  },
  {
    code: 'EG', map: '🇪🇬', phoneCode: 20, value: 'Egypt',
  },
  {
    code: 'SV', map: '🇸🇻', phoneCode: 503, value: 'El Salvador',
  },
  {
    code: 'GQ', map: '🇬🇶', phoneCode: 240, value: 'Equatorial Guinea',
  },
  {
    code: 'ER', map: '🇪🇷', phoneCode: 291, value: 'Eritrea',
  },
  {
    code: 'EE', map: '🇪🇪', phoneCode: 372, value: 'Estonia',
  },
  {
    code: 'ET', map: '🇪🇹', phoneCode: 251, value: 'Ethiopia',
  },
  {
    code: 'FK', map: '🇫🇰', phoneCode: 500, value: 'Falkland Islands',
  },
  {
    code: 'FO', map: '🇫🇴', phoneCode: 298, value: 'Faroe Islands',
  },
  {
    code: 'FI', map: '🇫🇮', phoneCode: 358, value: 'Finland',
  },
  {
    code: 'FR', map: '🇫🇷', phoneCode: 33, value: 'France',
  },
  {
    code: 'GF', map: '🇬🇫', phoneCode: 594, value: 'French Guiana',
  },
  {
    code: 'PF', map: '🇵🇫', phoneCode: 689, value: 'French Polynesia',
  },
  {
    code: 'TF', map: '🇹🇫', phoneCode: 0, value: 'French Southern Territories',
  },
  {
    code: 'GA', map: '🇬🇦', phoneCode: 241, value: 'Gabon',
  },
  {
    code: 'GE', map: '🇬🇪', phoneCode: 995, value: 'Georgia',
  },
  {
    code: 'DE', map: '🇩🇪', phoneCode: 49, value: 'Germany',
  },
  {
    code: 'GH', map: '🇬🇭', phoneCode: 233, value: 'Ghana',
  },
  {
    code: 'GI', map: '🇬🇮', phoneCode: 350, value: 'Gibraltar',
  },
  {
    code: 'GR', map: '🇬🇷', phoneCode: 30, value: 'Greece',
  },
  {
    code: 'GL', map: '🇬🇱', phoneCode: 299, value: 'Greenland',
  },
  {
    code: 'GD', map: '🇬🇩', phoneCode: 1473, value: 'Grenada',
  },
  {
    code: 'GP', map: '🇬🇵', phoneCode: 590, value: 'Guadeloupe',
  },
  {
    code: 'GU', map: '🇬🇺', phoneCode: 1671, value: 'Guam',
  },
  {
    code: 'GT', map: '🇬🇹', phoneCode: 502, value: 'Guatemala',
  },
  {
    code: 'GN', map: '🇬🇳', phoneCode: 224, value: 'Guinea',
  },
  {
    code: 'GW', map: '🇬🇼', phoneCode: 245, value: 'Guinea-Bissau',
  },
  {
    code: 'GY', map: '🇬🇾', phoneCode: 592, value: 'Guyana',
  },
  {
    code: 'HT', map: '🇭🇹', phoneCode: 509, value: 'Haiti',
  },
  {
    code: 'HN', map: '🇭🇳', phoneCode: 504, value: 'Honduras',
  },
  {
    code: 'HU', map: '🇭🇺', phoneCode: 36, value: 'Hungary',
  },
  {
    code: 'IS', map: '🇮🇸', phoneCode: 354, value: 'Iceland',
  },
  {
    code: 'IN', map: '🇮🇳', phoneCode: 91, value: 'India',
  },
  {
    code: 'ID', map: '🇮🇩', phoneCode: 62, value: 'Indonesia',
  },
  {
    code: 'IR', map: '🇮🇷', phoneCode: 98, value: 'Iran',
  },
  {
    code: 'IQ', map: '🇮🇶', phoneCode: 964, value: 'Iraq',
  },
  {
    code: 'IE', map: '🇮🇪', phoneCode: 353, value: 'Ireland',
  },
  {
    code: 'IL', map: '🇮🇱', phoneCode: 972, value: 'Israel',
  },
  {
    code: 'IT', map: '🇮🇹', phoneCode: 39, value: 'Italy',
  },
  {
    code: 'JM', map: '🇯🇲', phoneCode: 1876, value: 'Jamaica',
  },
  {
    code: 'JP', map: '🇯🇵', phoneCode: 81, value: 'Japan',
  },
  {
    code: 'JO', map: '🇯🇴', phoneCode: 962, value: 'Jordan',
  },
  {
    code: 'KZ', map: '🇰🇿', phoneCode: 7, value: 'Kazakhstan',
  },
  {
    code: 'KE', map: '🇰🇪', phoneCode: 254, value: 'Kenya',
  },
  {
    code: 'KI', map: '🇰🇮', phoneCode: 686, value: 'Kiribati',
  },
  {
    code: 'KW', map: '🇰🇼', phoneCode: 965, value: 'Kuwait',
  },
  {
    code: 'KG', map: '🇰🇬', phoneCode: 996, value: 'Kyrgyzstan',
  },
  {
    code: 'LA', map: '🇱🇦', phoneCode: 856, value: 'Laos',
  },
  {
    code: 'LV', map: '🇱🇻', phoneCode: 371, value: 'Latvia',
  },
  {
    code: 'LB', map: '🇱🇧', phoneCode: 961, value: 'Lebanon',
  },
  {
    code: 'LS', map: '🇱🇸', phoneCode: 266, value: 'Lesotho',
  },
  {
    code: 'LR', map: '🇱🇷', phoneCode: 231, value: 'Liberia',
  },
  {
    code: 'LY', map: '🇱🇾', phoneCode: 218, value: 'Libya',
  },
  {
    code: 'LI', map: '🇱🇮', phoneCode: 423, value: 'Liechtenstein',
  },
  {
    code: 'LT', map: '🇱🇹', phoneCode: 370, value: 'Lithuania',
  },
  {
    code: 'LU', map: '🇱🇺', phoneCode: 352, value: 'Luxembourg',
  },
  {
    code: 'MK', map: '🇲🇰', phoneCode: 389, value: 'Macedonia',
  },
  {
    code: 'MG', map: '🇲🇬', phoneCode: 261, value: 'Madagascar',
  },
  {
    code: 'MW', map: '🇲🇼', phoneCode: 265, value: 'Malawi',
  },
  {
    code: 'MY', map: '🇲🇾', phoneCode: 60, value: 'Malaysia',
  },
  {
    code: 'MV', map: '🇲🇻', phoneCode: 960, value: 'Maldives',
  },
  {
    code: 'ML', map: '🇲🇱', phoneCode: 223, value: 'Mali',
  },
  {
    code: 'MT', map: '🇲🇹', phoneCode: 356, value: 'Malta',
  },
  {
    code: 'MH', map: '🇲🇭', phoneCode: 692, value: 'Marshall Islands',
  },
  {
    code: 'MQ', map: '🇲🇶', phoneCode: 596, value: 'Martinique',
  },
  {
    code: 'MR', map: '🇲🇷', phoneCode: 222, value: 'Mauritania',
  },
  {
    code: 'MU', map: '🇲🇺', phoneCode: 230, value: 'Mauritius',
  },
  {
    code: 'YT', map: '🇾🇹', phoneCode: 269, value: 'Mayotte',
  },
  {
    code: 'MX', map: '🇲🇽', phoneCode: 52, value: 'Mexico',
  },
  {
    code: 'FM', map: '🇫🇲', phoneCode: 691, value: 'Micronesia',
  },
  {
    code: 'MD', map: '🇲🇩', phoneCode: 373, value: 'Moldova',
  },
  {
    code: 'MC', map: '🇲🇨', phoneCode: 377, value: 'Monaco',
  },
  {
    code: 'MN', map: '🇲🇳', phoneCode: 976, value: 'Mongolia',
  },
  {
    code: 'MS', map: '🇲🇸', phoneCode: 1664, value: 'Montserrat',
  },
  {
    code: 'MA', map: '🇲🇦', phoneCode: 212, value: 'Morocco',
  },
  {
    code: 'MZ', map: '🇲🇿', phoneCode: 258, value: 'Mozambique',
  },
  {
    code: 'NA', map: '🇳🇦', phoneCode: 264, value: 'Namibia',
  },
  {
    code: 'NR', map: '🇳🇷', phoneCode: 674, value: 'Nauru',
  },
  {
    code: 'NP', map: '🇳🇵', phoneCode: 977, value: 'Nepal',
  },
  {
    code: 'NC', map: '🇳🇨', phoneCode: 687, value: 'New Caledonia',
  },
  {
    code: 'NZ', map: '🇳🇿', phoneCode: 64, value: 'New Zealand',
  },
  {
    code: 'NI', map: '🇳🇮', phoneCode: 505, value: 'Nicaragua',
  },
  {
    code: 'NE', map: '🇳🇪', phoneCode: 227, value: 'Niger',
  },
  {
    code: 'NG', map: '🇳🇬', phoneCode: 234, value: 'Nigeria',
  },
  {
    code: 'NU', map: '🇳🇺', phoneCode: 683, value: 'Niue',
  },
  {
    code: 'NF', map: '🇳🇫', phoneCode: 672, value: 'Norfolk Island',
  },
  {
    code: 'MP', map: '🇲🇵', phoneCode: 1670, value: 'Northern Mariana Islands',
  },
  {
    code: 'NO', map: '🇳🇴', phoneCode: 47, value: 'Norway',
  },
  {
    code: 'OM', map: '🇴🇲', phoneCode: 968, value: 'Oman',
  },
  {
    code: 'PK', map: '🇵🇰', phoneCode: 92, value: 'Pakistan',
  },
  {
    code: 'PW', map: '🇵🇼', phoneCode: 680, value: 'Palau',
  },
  {
    code: 'PA', map: '🇵🇦', phoneCode: 507, value: 'Panama',
  },
  {
    code: 'PY', map: '🇵🇾', phoneCode: 595, value: 'Paraguay',
  },
  {
    code: 'PE', map: '🇵🇪', phoneCode: 51, value: 'Peru',
  },
  {
    code: 'PH', map: '🇵🇭', phoneCode: 63, value: 'Philippines',
  },
  {
    code: 'PL', map: '🇵🇱', phoneCode: 48, value: 'Poland',
  },
  {
    code: 'PT', map: '🇵🇹', phoneCode: 351, value: 'Portugal',
  },
  {
    code: 'PR', map: '🇵🇷', phoneCode: 1787, value: 'Puerto Rico',
  },
  {
    code: 'QA', map: '🇶🇦', phoneCode: 974, value: 'Qatar',
  },
  {
    code: 'RO', map: '🇷🇴', phoneCode: 40, value: 'Romania',
  },
  {
    code: 'RU', map: '🇷🇺', phoneCode: 70, value: 'Russia',
  },
  {
    code: 'RW', map: '🇷🇼', phoneCode: 250, value: 'Rwanda',
  },
  {
    code: 'WS', map: '🇼🇸', phoneCode: 684, value: 'Samoa',
  },
  {
    code: 'SM', map: '🇸🇲', phoneCode: 378, value: 'San Marino',
  },
  {
    code: 'SA', map: '🇸🇦', phoneCode: 966, value: 'Saudi Arabia',
  },
  {
    code: 'SN', map: '🇸🇳', phoneCode: 221, value: 'Senegal',
  },
  {
    code: 'RS', map: '🇷🇸', phoneCode: 381, value: 'Serbia',
  },
  {
    code: 'SC', map: '🇸🇨', phoneCode: 248, value: 'Seychelles',
  },
  {
    code: 'SL', map: '🇸🇱', phoneCode: 232, value: 'Sierra Leone',
  },
  {
    code: 'SG', map: '🇸🇬', phoneCode: 65, value: 'Singapore',
  },
  {
    code: 'SK', map: '🇸🇰', phoneCode: 421, value: 'Slovakia',
  },
  {
    code: 'SI', map: '🇸🇮', phoneCode: 386, value: 'Slovenia',
  },
  {
    code: 'SB', map: '🇸🇧', phoneCode: 677, value: 'Solomon Islands',
  },
  {
    code: 'SO', map: '🇸🇴', phoneCode: 252, value: 'Somalia',
  },
  {
    code: 'ZA', map: '🇿🇦', phoneCode: 27, value: 'South Africa',
  },
  {
    code: 'SS', map: '🇸🇸', phoneCode: 211, value: 'South Sudan',
  },
  {
    code: 'ES', map: '🇪🇸', phoneCode: 34, value: 'Spain',
  },
  {
    code: 'LK', map: '🇱🇰', phoneCode: 94, value: 'Sri Lanka',
  },
  {
    code: 'SD', map: '🇸🇩', phoneCode: 249, value: 'Sudan',
  },
  {
    code: 'SR', map: '🇸🇷', phoneCode: 597, value: 'Suriname',
  },
  {
    code: 'SZ', map: '🇸🇿', phoneCode: 268, value: 'Swaziland',
  },
  {
    code: 'SE', map: '🇸🇪', phoneCode: 46, value: 'Sweden',
  },
  {
    code: 'CH', map: '🇨🇭', phoneCode: 41, value: 'Switzerland',
  },
  {
    code: 'SY', map: '🇸🇾', phoneCode: 963, value: 'Syria',
  },
  {
    code: 'TW', map: '🇹🇼', phoneCode: 886, value: 'Taiwan',
  },
  {
    code: 'TJ', map: '🇹🇯', phoneCode: 992, value: 'Tajikistan',
  },
  {
    code: 'TZ', map: '🇹🇿', phoneCode: 255, value: 'Tanzania',
  },
  {
    code: 'TH', map: '🇹🇭', phoneCode: 66, value: 'Thailand',
  },
  {
    code: 'TG', map: '🇹🇬', phoneCode: 228, value: 'Togo',
  },
  {
    code: 'TK', map: '🇹🇰', phoneCode: 690, value: 'Tokelau',
  },
  {
    code: 'TO', map: '🇹🇴', phoneCode: 676, value: 'Tonga',
  },
  {
    code: 'TN', map: '🇹🇳', phoneCode: 216, value: 'Tunisia',
  },
  {
    code: 'TR', map: '🇹🇷', phoneCode: 90, value: 'Turkey',
  },
  {
    code: 'TM', map: '🇹🇲', phoneCode: 7370, value: 'Turkmenistan',
  },
  {
    code: 'TV', map: '🇹🇻', phoneCode: 688, value: 'Tuvalu',
  },
  {
    code: 'UG', map: '🇺🇬', phoneCode: 256, value: 'Uganda',
  },
  {
    code: 'UA', map: '🇺🇦', phoneCode: 380, value: 'Ukraine',
  },
  {
    code: 'AE', map: '🇦🇪', phoneCode: 971, value: 'United Arab Emirates',
  },
  {
    code: 'GB', map: '🇬🇧', phoneCode: 44, value: 'United Kingdom',
  },
  {
    code: 'US', map: '🇺🇸', phoneCode: 1, value: 'United States',
  },
  {
    code: 'UY', map: '🇺🇾', phoneCode: 598, value: 'Uruguay',
  },
  {
    code: 'UZ', map: '🇺🇿', phoneCode: 998, value: 'Uzbekistan',
  },
  {
    code: 'VU', map: '🇻🇺', phoneCode: 678, value: 'Vanuatu',
  },
  {
    code: 'VE', map: '🇻🇪', phoneCode: 58, value: 'Venezuela',
  },
  {
    code: 'VN', map: '🇻🇳', phoneCode: 84, value: 'Vietnam',
  },
  {
    code: 'EH', map: '🇪🇭', phoneCode: 212, value: 'Western Sahara',
  },
  {
    code: 'YE', map: '🇾🇪', phoneCode: 967, value: 'Yemen',
  },
  {
    code: 'ZM', map: '🇿🇲', phoneCode: 260, value: 'Zambia',
  },
  {
    code: 'ZW', map: '🇿🇼', phoneCode: 26, value: 'Zimbabwe',
  }];


export default data;
