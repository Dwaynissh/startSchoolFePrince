import LittleHeader from "../../../components/layout/LittleHeader";
import {
  usePastQuestionHistory,
  useStudentInfo,
} from "../../hooks/useStudentHook";
document.title = "Quiz History";

const QuizHistory = () => {
  const { studentInfo } = useStudentInfo();

  const { pastQuestionData } = usePastQuestionHistory(studentInfo?._id);

  console.log(pastQuestionData);

  return (
    <div>
      <LittleHeader name="Quiz History" />

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Subject</th>
              <th>Year</th>
              <th>Percent</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {pastQuestionData?.map((el: any, i: number) => (
              <tr>
                <th>{i + 1}</th>
                <td>{el.subject.toLocaleUpperCase()}</td>
                <td>{el.year}</td>
                <td>{el.percent}%</td>
                <td>{el.score}/60</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default QuizHistory;
