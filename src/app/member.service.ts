import { Injectable } from '@angular/core';
import { Member } from './member';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor() { }

  members: Member[] = [
    {id: 'BSSE 1129', name: 'Md. Rakib Trofder', designation: 'President'}, 
    {id: 'BSSE 1106', name: 'Hasnain Iqbal Shirsho', designation: 'General Secretary'},
    {id: 'BSSE 1121', name: 'Piash Mahmud', designation: 'Vice President'},
    {id: 'BSSE 1107', name: 'Samiha Noshin Tahsin', designation: 'Assistant General Secretary'},
    {id: 'BSSE 1101', name: 'Mohsin Ibna Amin', designation: 'Organizing Secretary'},
    {id: 'BSSE 1124', name: 'Ashraful Islam Shanto Sikder', designation: 'Assistant Organizing Secretary'},
    {id: 'BSSE 1116', name: 'Muktar Hosen' , designation: 'Office Secretary' },
    {id: 'BSSE 1118', name: 'Khairul Islam' , designation:'Assistant Office Secretary' },
    {id: 'BSSE 1105', name: 'Fahad Hossain', designation: 'IT Secretary' },
    {id: 'BSSE 1121', name: 'Lutfar Alif', designation: 'Assistant IT Secretary'},
    {id: 'BSSE 1130', name: 'Mushfiqur Rahman', designation: 'Event Secretary' },
    {id: 'BSSE 1117', name: 'Raisul Islam Rahat', designation: 'Assistant Event Secretary'},
    {id: 'BSSE 1114', name: 'Mustahid Hasan Sakib', designation: 'Design Secretary'},
    {id: 'BSSE 1131', name: 'Ahmed Adnan', designation: 'Assistant Design Secretary'},
    {id: 'BSSE 1132', name: 'Proma Chowdhury', designation: 'Internal Affairs Secretary'},
    {id: 'BSSE 1126', name: 'Dardaul Haque', designation: 'Assistant  Internal Affairs Secretary'},
    {id: 'BSSE 1103', name: 'Mahtab Hosen', designation: 'External Affairs Secretary'},
    {id: 'BSSE 1105', name: 'Fahad Hosen', designation: 'Assistant External Affairs Secretary'},
    {id: 'BSSE 1104', name: 'Md. Siam', designation: 'Workshop Secretary'},
    {id: 'BSSE 1107', name: 'Nazmus Sakib Ahmed', designation: 'Assistant Workshop Secretary'},
    {id: 'BSSE 1119', name: 'Jubaer Ahmed', designation: 'Seminar Secretary'},
    {id: 'BSSE 1113', name: 'Inzamamul Haque', designation: 'Assistant Seminar Secretary' },
    {id: 'BSSE 1134', name: 'Junaed Islam', designation: 'Communication Secretary'},
    {id: 'BSSE 1135', name: 'Nazmul Hasan Rupu', designation: 'Assistant Communication Secretary' },
    {id: 'BSSE 1130', name: 'Mushfiqur Rahman Chowdhury' ,designation: 'Finance Secretary'},
    {id: 'BSSE 1109', name: 'Jafar Mahin', designation: 'Assistant Finance Secretary' },
    {id: 'BSSE 1133', name: 'Khalid Hasan Saad', designation: 'Science Affairs Secretary'},
    {id: 'BSSE 1136', name: 'Rashid Sabab Nihal', designation: 'Assistant Science Affairs Secretary'},
    {id: 'BSSE 1127', name: 'Tahmeed Mahbub', designation: 'Reader Welfare Secretary'},
    {id: 'BSSE 1111', name: 'Kazi Muktadir Ahmed', name: 'Assistant Reader Welfare Secretary' },
    {id: 'BSSE 1128', name: 'Tasmia Zerin', name: 'Publicity Secretary'},
    {id: 'BSSE 1115', name: 'Jitesh Sureka', name: 'Assistant Publicity Secretary'},
    {id: 'BSSE 1122', name: 'Saad Sakib Noor', name: 'Resource Management Secretary' },
    {id: 'BSSE 1102', name: 'Fahim Morshed', name: 'Assistant Resource Management Secretary' },
    {id: 'BSSE 1112', name: 'Md. Arif Hasan', name: 'Literature Secretary' },
    {id: 'BSSE 1123', name: 'Shartaz Sazid Nahid', name: 'Assistant Literature Secretary' },
  ];
}
