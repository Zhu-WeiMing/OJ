package com.zwm.oj.service;

import com.zwm.oj.model.dto.questionsubmit.QuestionSubmitAddRequest;
import com.zwm.oj.model.entity.QuestionSubmit;
import com.baomidou.mybatisplus.extension.service.IService;
import com.zwm.oj.model.entity.User;

/**
* @author zhuweiming
* @description 针对表【question_submit(帖子题目提交)】的数据库操作Service
* @createDate 2024-07-23 22:33:03
*/
public interface QuestionSubmitService extends IService<QuestionSubmit> {

    /**
     * 题目提交
     *
     * @param questionSubmitAddRequest
     * @param loginUser
     * @return
     */
    Long doQuestionSubmit(QuestionSubmitAddRequest questionSubmitAddRequest, User loginUser);

    }
