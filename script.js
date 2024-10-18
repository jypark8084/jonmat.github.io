        // 체크박스를 클릭할 때 배경을 GIF로 변경하는 함수
        document.getElementById('bg-toggle').addEventListener('change', function() {
            if (this.checked) {
                document.body.style.backgroundImage = "url('w123(slow).GIF')"; // GIF 파일 경로
            } else {
                document.body.style.backgroundImage = "none"; // 기본 배경으로 복원
            }
        });