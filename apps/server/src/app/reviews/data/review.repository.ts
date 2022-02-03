import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AddReviewDto } from '../dto/add-review.dto';
import { UpdateReviewDto } from '../dto/update-review.dto';
import { ReviewDocument } from './review.document';
import { ReviewsModelName } from './review.schema';

@Injectable()
export class ReviewRepository {
  constructor(
    @InjectModel(ReviewsModelName) private bookModel: Model<ReviewDocument>
  ) {}

  async addReview(addReviewDto: AddReviewDto): Promise<ReviewDocument> {
    const newReview = new this.bookModel(addReviewDto);
    return newReview.save();
  }

  async getAllReviews(): Promise<ReviewDocument[]> {
    return this.bookModel.find().exec();
  }

  async getReviewById(id: string): Promise<ReviewDocument> {
    return this.bookModel.findById(id).exec();
  }

  async updateReview(
    id: string,
    updatedReview: UpdateReviewDto
  ): Promise<ReviewDocument> {
    return this.bookModel.findByIdAndUpdate(id, updatedReview, {
      new: true,
    });
  }

  async deleteReview(id: string) {
    return this.bookModel.findByIdAndRemove(id);
  }
}
