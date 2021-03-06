/*
HTTP의 장점을 최대한 활용할 수 있는 아키텍처 -> REST
HTTP 프로토콜을 의도에 맞게 디자인하도록 유도한다.
REST의 기본 원칙을 성실히 지킨 서비스 -> RESTful
*/

/*
REST API의 구성 
자원 , 행위 , 표현 의 3가지 요소로 구성된다. 
REST는 자체 표현 구조로 구성되어 REST API만으로 HTTP 요청의 내용을 이해할 수 있다. 

자원 -> 자원 -> URI (엔드포인트)
행위 -> 자원에 대한 행위 -> HTTP 요청 메서드
표현 -> 자원에 대한 행위의 구체적 내용 -> 페이로드 

가장 중요한 두가지 원칙
URI는 리소스를 표현하는데 집중  리소스를 식별할 수 있는 이름은 명사가 들어가야 한다. 
행위에 대한 정의는 HTTP 요청 메서드를 통해 한다. 
HTTP 요청 메서드는 클라이언트가 서버에게 요청의 종류와 목적을 알리는 방법이다. 
(GET,POST,PUT,PATCH,DELETE)를 사용해 CRUD를 구현한다. 

GET -> 모든 , 특정 리소스 취득
POST -> 리소스 생성 (create)
PUT -> 리소스 전체 교체 (replace)
PATCH -> 리소스 일부 수정 (update)
DELETE -> 리소스 삭제 (delete)

리소스에 대한 행위는 HTTP요청 메서드를 통해 표현하며 URL에 표현하지 않는다. 
*/
