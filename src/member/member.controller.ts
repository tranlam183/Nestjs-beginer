import { Controller, Get } from '@nestjs/common';
import { MemberService } from './member.service';

@Controller('member')
export class MemberController {
    constructor(private memberService: MemberService) { }

    @Get()
    getMembers() {
        this.memberService.findAll();
    }
}
