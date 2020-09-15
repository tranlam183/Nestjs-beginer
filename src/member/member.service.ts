import { Injectable } from '@nestjs/common';
import { Member } from './interface/member.interface';

@Injectable()
export class MemberService {
    private members: Member[] = [];

    findAll() {
        return this.members;
    }
}
