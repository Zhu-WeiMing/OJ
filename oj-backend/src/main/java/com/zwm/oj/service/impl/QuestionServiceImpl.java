package com.zwm.oj.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.zwm.oj.model.entity.Question;
import com.zwm.oj.service.QuestionService;
import com.zwm.oj.mapper.QuestionMapper;
import org.springframework.stereotype.Service;

/**
* @author zhuweiming
* @description 针对表【question(题目)】的数据库操作Service实现
* @createDate 2024-07-23 22:29:51
*/
@Service
public class QuestionServiceImpl extends ServiceImpl<QuestionMapper, Question>
    implements QuestionService{

}




