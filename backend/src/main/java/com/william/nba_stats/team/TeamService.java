package com.william.nba_stats.team;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;

@Service
public class TeamService {
    private final TeamRepository repository;

    @Autowired
    public TeamService(TeamRepository repository) {
        this.repository = repository;
    }

    public List<Team> getTeams(){
        return repository.findAll();
    }

    public Team getTeamById(Long id){
        return repository.findById(id).orElseThrow(() ->
            new IllegalStateException("Team not found"));
    }

    public Team getTeamByTabb(String tabb){
        return repository.findByTabb(tabb).orElseThrow(() ->
                new IllegalStateException("Team not found"));
    }

    @Transactional
    public Team addTeam(Team team) {
        repository.save(team);
        return team;
    }

    @Transactional
    public Team updateTeam(Team newTeam) {
        Team oldTeam = getTeamById(newTeam.getId());
        oldTeam.updateTeam(newTeam);
        return repository.save(oldTeam);
    }

    @Transactional
    public void deleteTeamById(Long id) {
        repository.deleteById(id);
    }
}
